<?php

public static function toArrayObj($object, $properties = [])
    {

        $finalResult = new stdClass();

        $id = self::generateId($object);

        $stack = [(object) ['obj' => $object, 'result' => &$finalResult, 'id' => $id ?? null]];


        while (!empty($stack)) {
            $current = array_pop($stack);

            $result = &$current->result;


            if (is_object($current->obj)) {
                $response = self::cacheLookup($current->id);

                if (isset($response)) {
                    $result = $response;
                    $isComplete = false;
                    continue;
                }

                $object = self::apply($object, $properties);
            } else {
                $object = $current->obj;
                $isComplete = true;
            }


            foreach ($object as $key => $value) {
                Yii::warning('Running Loop: ' . print_r($key, true));
                $response = null;
                if (is_object($value)) {

                    $objectId = self::generateId($value) ?? null;
                    $response = self::cacheLookup($objectId);

                    if (empty($response)) {
                        $value = self::apply($value, $properties);
                    }
                }

                if (isset($response)) {

                    // Yii::warning(print_r($key, true) . ':: ' . print_r($response, true));
                    $result->$key = $response;
                    // Yii::warning(print_r($result, true));

                } elseif (is_array($value)) {

                    $result->$key = new stdClass();
                    array_push($stack, (object) ['obj' => $value, 'result' => &$result->$key, 'id' => $objectId ?? null]);
                    $isComplete = false;
                } else {

                    $result->$key = $value;
                }
            }

            if ($isComplete) {
                $objectId = $current->id;
                if (isset($objectId)) {
                    // Yii::warning('Caching '. print_r($objectId, true). ' -- ' . print_r($object, true));
                    self::cache($objectId, $object);
                }
                $result = $object;
            }
        }

        return $finalResult;
    }