'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: <a href="tel:+251921273127">+251 921273127</a>,
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: <a href="mailto:ashenafizewdie19@gmail.com">ashenafizewdie19@gmail.com</a>,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Addis Ababa, Ethiopia",
  },
]

type Status = "idle" | "submitting" | "success" | "partial" | "error";

const statusCopy: Record<Status, string> = {
  idle: "",
  submitting: "Sending…",
  success: "Message sent — I'll get back to you soon.",
  partial: "Message received, but one part of the delivery didn't confirm. I'll still see it.",
  error: "Something went wrong. Try again, or email me directly at ashenafizewdie19@gmail.com.",
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      } else if (response.status === 207) {
        setStatus("partial");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <span className="eyebrow mb-4">CONTACT — Let's build something</span>
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 xl:p-10 bg-surface border border-white/5 rounded-xl">
              <div>
                <h3 className="h3 text-accent mb-1">Let&apos;s work together</h3>
                <p className="text-white/60 font-primary text-sm">Tell me what you're building — I usually reply within a day.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" placeholder="First name" value={formData.firstName}
                  onChange={handleChange} required />
                <Input name="lastName" placeholder="Last name" value={formData.lastName}
                  onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email address" value={formData.email}
                  onChange={handleChange} required />
                <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone}
                  onChange={handleChange} required />
              </div>
              <Select onValueChange={handleSelectChange} value={formData.service}>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web development">Web Development</SelectItem>
                    <SelectItem value="Web design">Web Design</SelectItem>
                    <SelectItem value="Hardware design">Hardware Design</SelectItem>
                    <SelectItem value="Mobile app">Mobile App Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[160px]"
                name="message"
                value={formData.message}
                placeholder="Type your message here..."
                onChange={handleChange}
                required
              />
              <div className="flex items-center gap-5">
                <Button className="max-w-40" type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Send message"}
                </Button>
                {status !== "idle" && (
                  <p className={`text-sm font-primary ${status === "success" ? "text-trace" : status === "partial" ? "text-accent" : status === "error" ? "text-red-400" : "text-white/50"}`}>
                    {statusCopy[status]}
                  </p>
                )}
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-surface border border-white/5 text-accent rounded-md flex items-center justify-center">
                    <div className="text-[24px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/50 font-primary text-sm">{item.title}</p>
                    <h3 className="text-lg font-primary">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
