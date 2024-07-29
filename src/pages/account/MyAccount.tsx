import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getProfile, updateUserProfile } from "@/api/userApi";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface MyAccountFormInputs {
  fname: string;
  lname: string;
  email: string;
  password: string;
  newPassword: string;
  repeatNewPassword: string;
  imgProfile?: FileList; // Change this to FileList to handle file input properly
}

const MyAccount: React.FC = () => {
  const form = useForm<MyAccountFormInputs>({
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      newPassword: "",
      repeatNewPassword: "",
      imgProfile: undefined,
    },
  });
  const { toast } = useToast();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      form.setValue("fname", user.fname || "");
      form.setValue("lname", user.lname || "");
      form.setValue("email", user.email || "");
    }
  }, [user, form.setValue]);

  const onSubmit: SubmitHandler<MyAccountFormInputs> = async (data) => {
    if (data.newPassword !== data.repeatNewPassword) {
      return toast({
        title: "Error",
        description: "Passwords do not match",
      });
    }

    //TODO can't update profile
    try {
      const formData = new FormData();
      formData.append("fname", data.fname);
      formData.append("lname", data.lname);
      formData.append("email", data.email);
      if (data.password && data.newPassword) {
        formData.append("password", data.password);
        formData.append("newPassword", data.newPassword);
      }
      if (data.imgProfile && data.imgProfile.length > 0) {
        formData.append("imgProfile", data.imgProfile[0]);
      }

      await updateUserProfile(formData);

      // Get the updated user profile
      const updatedUserProfile = await getProfile();
      setUser(updatedUserProfile); // Update user in context
      localStorage.setItem("user", JSON.stringify(updatedUserProfile)); // Update user in localStorage

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });

      // Clear password fields after successful update
      form.setValue("password", "");
      form.setValue("newPassword", "");
      form.setValue("repeatNewPassword", "");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        status: "error",
      });
    }
  };

  return (
    <section>
      <h4 className="font-bold">Account Details</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="font-bold">Change Password</h4>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Current Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeatNewPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Repeat New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imgProfile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Image</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file ? [file] : undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    </section>
  );
};

export default MyAccount;
