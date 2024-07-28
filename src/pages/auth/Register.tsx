import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "@/api/userApi";
import { registerSchema } from "@/utils/validationSchemas";
import { useToast } from "@/components/ui/use-toast";

// components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RegisterFormInputs {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  month: string;
  day: string;
  year: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const dob = `${data.year}-${data.month}-${data.day}`;
      console.log("Form data before sending:", {
        email: data.email,
        password: data.password,
        fname: data.fname,
        lname: data.lname,
        phone: data.phone,
        dob: dob,
      });
      const response = await registerUser({
        email: data.email,
        password: data.password,
        fname: data.fname,
        lname: data.lname,
        dob: dob,
      });
      console.log("Registration successful:", response);
      toast({
        title: "Registration success",
        description: "You have successfully registered. You can now login.",
      });
      navigate("/login"); // Redirect to login page after successful registration
    } catch (error) {
      console.error("Registration failed", error);
      // Handle registration error (e.g., show error message to user)
    }
  };

  // Use useEffect to trigger validation on input change
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name) {
        trigger(name as keyof RegisterFormInputs);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, trigger]);

  const renderInput = (
    id: keyof RegisterFormInputs,
    label: string,
    type: string = "text",
    placeholder?: string
  ) => (
    <div className="w-full flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        className={`shadow appearance-none border ${
          errors[id] ? "border-red-500" : ""
        } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
      />
      {errors[id] && (
        <p className="text-red-500 text-xs italic min-h-[20px]">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );

  const renderDateOfBirthInput = () => (
    <div className="w-full flex flex-col gap-2">
      <Label>Date of Birth</Label>
      <div className="flex gap-4">
        <div className="w-full">
          <Select onValueChange={(value) => setValue("month", value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="01">January</SelectItem>
              <SelectItem value="02">February</SelectItem>
              <SelectItem value="03">March</SelectItem>
              <SelectItem value="04">April</SelectItem>
              <SelectItem value="05">May</SelectItem>
              <SelectItem value="06">June</SelectItem>
              <SelectItem value="07">July</SelectItem>
              <SelectItem value="08">August</SelectItem>
              <SelectItem value="09">September</SelectItem>
              <SelectItem value="10">October</SelectItem>
              <SelectItem value="11">November</SelectItem>
              <SelectItem value="12">December</SelectItem>
            </SelectContent>
          </Select>
          {errors.month && (
            <p className="text-red-500 text-xs italic min-h-[20px]">
              {errors.month?.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <Input
            type="number"
            placeholder="Day"
            {...register("day", { required: "Day is required" })}
            className={`shadow appearance-none border ${
              errors.day ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.day && (
            <p className="text-red-500 text-xs italic min-h-[20px]">
              {errors.day?.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <Input
            type="number"
            placeholder="Year"
            {...register("year", { required: "Year is required" })}
            className={`shadow appearance-none border ${
              errors.year ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {errors.year && (
            <p className="text-red-500 text-xs italic min-h-[20px]">
              {errors.year?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className="isolate bg-white h-[calc(100vh-68px)] flex items-center justify-center">
      {/* bg */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>

      <Card className="mx-auto w-[750px] px-4">
        <CardHeader className="gap-2 py-8">
          <CardTitle className="text-4xl text-center">Register</CardTitle>
          <CardDescription className="text-center">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="w-full flex gap-4">
              {renderInput("fname", "First name", "text", "John")}
              {renderInput("lname", "Last name", "text", "Doe")}
            </div>
            <div className="w-full flex gap-4">
              {renderInput("email", "Email", "email", "johndoe@example.com")}
              {renderInput("phone", "Phone", "tel", "123-456-7890")}
            </div>
            {renderDateOfBirthInput()}
            {renderInput("password", "Password", "password")}
            {renderInput("confirmPassword", "Confirm Password", "password")}
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account? &nbsp;
            <Link to="/login" className="text-primary underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
