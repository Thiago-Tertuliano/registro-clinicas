
import { useState } from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome da clínica deve ter pelo menos 2 caracteres.",
  }),
  address: z.string().min(10, {
    message: "O endereço deve ter pelo menos 10 caracteres.",
  }),
  contact: z.string().min(7, {
    message: "O número de contato deve ter pelo menos 7 caracteres.",
  }),
  services: z.string().min(10, {
    message: "Por favor, forneça uma breve descrição dos serviços oferecidos.",
  }),
});

const ClinicRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      contact: "",
      services: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Clínica registrada!",
      description: "Sua clínica foi registrada com sucesso.",
    });

    setIsSubmitting(false);
    router.push('/');
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Registro de Clínica</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Clínica</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o nome da clínica" {...field} />
                </FormControl>
                <FormDescription>
                  Este é o nome que será exibido na listagem de clínicas.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o endereço da clínica" {...field} />
                </FormControl>
                <FormDescription>
                  Endereço completo da clínica.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de Contato</FormLabel>
                <FormControl>
                  <Input placeholder="Insira o número de contato" {...field} />
                </FormControl>
                <FormDescription>
                  O número de contato principal da clínica.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serviços Oferecidos</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva os serviços oferecidos pela clínica"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Uma breve descrição dos serviços prestados pela clínica.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registrando..." : "Registrar Clínica"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ClinicRegistrationForm;
