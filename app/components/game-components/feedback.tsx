import { Feedback as FeedbackType } from "@/app/types/game";

const FEEDBACK_MESSAGES = {
  success: "Success",
  wrongKey: "Wrong Key",
  tooLate: "Too Late",
  tooSoon: "Too Soon",
};

const FeedbackComponent = ({ feedback }: { feedback: FeedbackType }) => {
  if (feedback === "success") {
    return <div className="text-green-500">{FEEDBACK_MESSAGES.success}</div>;
  }
  return <div className="text-red-500">{FEEDBACK_MESSAGES[feedback]}</div>;
};
export default FeedbackComponent;
