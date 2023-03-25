import Feedback from "../components/feedback-component/feedback.component";
import { useBoolean, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FeedbackType } from "../components/feedback-component/feedback.component";

export default function useFeedback() {
  const [feedback, setFeedback] = useState<{
    message: string;
    title?: string;
    type?: FeedbackType;
    timeout?: number;
  }>({
    message: "",
    type: "info",
  });

  const [show, { on, off, toggle }] = useBoolean(false);

  const triggerFeedback = (
    message: string,
    options: {
      title?: string;
      type?: FeedbackType;
      timeout?: number;
    } = {}
  ) => {
    const feedback = {
      message,
      title: options?.title,
      type: options?.type ?? "info",
      timeout: options?.timeout ?? 5000,
    };

    setFeedback(feedback);
  };

  useEffect(() => {
    on();
    setTimeout(() => {
      off();
    }, feedback?.timeout ?? 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedback]);

  return {
    triggerFeedback,
    render: (
      <Feedback
        type={feedback.type ?? "info"}
        title={feedback.title}
        show={show}
        message={feedback.message}
      />
    ),
  };
}
