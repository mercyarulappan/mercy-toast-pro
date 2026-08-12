import DefaultToast from "./variants/DefaultToast";
import GlassToast from "./variants/GlassToast";
import NeonToast from "./variants/NeonToast";
import CardToast from "./variants/CardToast";
import MinimalToast from "./variants/MinimalToast";
import GradientToast from "./variants/GradientToast";
function ToastRenderer(props) {
  switch (props.variant) {
    case "glass":
      return <GlassToast {...props} />;

    case "neon":
      return <NeonToast {...props} />;

    case "card":
      return <CardToast {...props} />;

    case "gradient":
      return <GradientToast {...props}/>;

    case "minimal":
      return <MinimalToast {...props}/>;

    default:
      return <DefaultToast {...props} />;
  }
}

export default ToastRenderer;
