"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import {z} from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";


const formSchema = z.object({
  name: z
    .string()
    .min(1, "Companion is required."),
  subject: z
    .string()
    .min(1, "Subject is required."),
    description: z
    .string()
    .min(1, "Description is required."),
    voice: z
    .string()
    .min(1, "Voice is required."),
    style: z
    .string()
    .min(1, "Style is required."),
    duration: z
    .coerce.number()
    .min(1, { message: "Duration is required." }),
})

type CompanionFormValues = z.infer<typeof formSchema>

const CompanionForm = () => {
  const form = useForm<CompanionFormValues>({
    resolver: zodResolver(formSchema),
    // resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      description: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })

  const onSubmit: SubmitHandler<CompanionFormValues> = (values) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the companion name" {...field} className="input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the Companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Technical Support" {...field} className="input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select a voice" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="male" className="capitalize">
                        Male
                      </SelectItem>
                      <SelectItem value="female" className="capitalize">
                        Female
                      </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="input capitalize">
                    <SelectValue placeholder="Select a style" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="formal" className="capitalize">
                        Formal
                      </SelectItem>
                      <SelectItem value="casual" className="capitalize">
                        Casual
                      </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ex. 30" {...field} className="input"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm