import { cva, VariantProps } from "cva";

const buttonVariants = cva({
  base: "rounded py-2 text-white px-6 transition-all",
  variants: {
    intent: {
      primary: ["bg-primary hover:bg-primaryDark"],
      secondary: [
        "bg-white",
        "text-primary",
        "border-x-1",
        "border-y-4",
        "border-primary",
      ],
      // danger: ["bg-red-600", "text-black"],
    },
    size: {
      small: ["text-sm", "py-1", "px-1"],
      default: ["text-lg", "py-2", "px-2"],
      large: ["text-2xl", "py-3", "px-4"],
    },
  },
  defaultVariants: {
    intent: "secondary",
    size: "default",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  text: string;
}

export default function Button({ intent, size, text, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ intent, size })} {...props}>
      {text} {size}
    </button>
  );
}
