import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="App">
      <h1>React Hook Foorm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input
            {...register("firstName", {
              required: "First Name - required field",
              minLength: {
                value: 5,
                message: "First Name -min Lenght 5 simbols"
              }
            })}
          />
        </label>
        <div style={{ minHeight: "40px" }}>
          {errors?.firstName && (
            <p> {errors?.firstName.message || "some Error in First Name"} </p>
          )}
        </div>

        <label>
          Second Name
          <input
            {...register("secondName", {
              required: "Second Name - required field",
              minLength: {
                value: 3,
                message: "Second Name - min Lenght 3 simbols"
              }
            })}
          />
        </label>

        <div style={{ minHeight: "40px" }}>
          {errors?.secondName && (
            <p> {errors?.secondName.message || "some Error in Second Name"} </p>
          )}
        </div>

        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}
