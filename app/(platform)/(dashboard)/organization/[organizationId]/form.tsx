"use client";

// import { create } from "@/actions/create-board";
import { createBoard } from "@/actions/create-board/index";
import { useAction } from "@/hooks/use-actions";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export const Form = () => {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(create, initialState);
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log({ title });

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} label="Board Title" />
      </div>

      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
