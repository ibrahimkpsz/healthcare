import GridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Safari from "@/components/ui/safari";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { CalendarCheck, Check, Clock, Hammer, LayoutDashboard, MessageSquareMoreIcon, QuoteIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      "title": "Simple Booking Process",
      "icon": <CalendarCheck />,
      "description": "Easily find available doctors and schedule appointments with just a few clicks."
    },
    {
      "title": "Flexible Appointment Times",
      "icon": <Clock />,
      "description": "Book appointments with your preferred doctor on weekdays between 08:00 and 16:00."
    },
    {
      "title": "Stay Reminded",
      "icon": <MessageSquareMoreIcon />,
      "description": "Receive automatic SMS reminders to ensure you never miss an appointment."
    },
    {
      "title": "Manage Your Appointments",
      "icon": <LayoutDashboard />,
      "description": "View, reschedule, or cancel appointments from your personal dashboard."
    }
  ];

  const steps = [
    {
      "stepNumber": 1,
      "title": "Select a Doctor",
      "description": "Select your preferred doctor from the list."
    },
    {
      "stepNumber": 2,
      "title": "Choose Date and Time",
      "description": "Choose an available date for your appointment."
    },
    {
      "stepNumber": 3,
      "title": "Confirm Your Booking",
      "description": "Confirm your booking and receive an SMS reminder."
    }
  ];

  const testimonials = [
    {
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?",
      "author": "Sarah T.",
      "company": "Lorem Ipsum Co."
    },
    {
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?",
      "author": "Michael R.",
      "company": "Lorem Ipsum Co."

    },
    {
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?",
      "author": "Emily K.",
      "company": "Lorem Ipsum Co."
    }
  ];

  const plans = [
    {
      "name": "Basic Plan",
      "price": "$9.90",
      "features": [
        "Book up to 5 appointments",
        "SMS reminders",
        "Priority support",
        "Access to all doctors"
      ],
      "buttonText": "Get Started"
    },
    {
      "name": "Standard Plan",
      "price": "$19.99",
      "features": [
        "Everything in Basic Plan",
        "Unlimited appointments",
        "SMS reminders",
        "Priority support",
      ],
      "buttonText": "Choose Plan"
    },
    {
      "name": "Premium Plan",
      "price": "$49.99",
      "features": [
        "Everthing in Pro Plan",
        "Unlimited appointments",
        "SMS and email reminders",
        "Dedicated account manager",
      ],
      "buttonText": "Go Premium"
    }
  ];

  return (
    <main className="max-w-screen-xl px-5 pt-20 mx-auto 2xl:px-0">
      <section className="relative flex flex-col gap-10 px-10 pt-20 size-full">
        <div className="flex flex-col items-center justify-center gap-5 mx-auto text-center">
          <h1 className="max-w-2xl text-5xl font-bold leading-tight">Book your doctor appointment <span className="inline-block text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text">effortlessly</span></h1>
          <p className="max-w-md text-base text-zinc-600">Find the right doctor, choose your preferred time, and book your appointment within minutes.</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <SignedOut>
            <Button asChild>
              <Link href="/dashboard">Request a Demo</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild>
              <Link href="/dashboard">Go Dashboard</Link>
            </Button>
          </SignedIn>
          <Button variant="outline">Get Started</Button>
        </div>
        <div className="relative">
          <Safari
            url="healthcare.vercel.app"
            className="size-full"
            src="/images/dashboard.png"
          />
        </div>
        <GridPattern
          numSquares={10}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[150%] -z-10",
          )}
        />
      </section>
      <section className="pt-24 bg-white">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-center">The technologies we use</h2>
          <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="/favicon.ico"
              width={158}
              height={48}
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            />
            <img
              alt="Reform"
              src="/favicon.ico"
              width={158}
              height={48}
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="/favicon.ico"
              width={158}
              height={48}
              className="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="/favicon.ico"
              width={158}
              height={48}
              className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="/favicon.ico"
              width={158}
              height={48}
              className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 pt-32" id="features">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-base text-cyan-500">Features</span>
          <h3 className="text-3xl font-semibold">Why Choose Our Appointment System?</h3>
          <p className="max-w-2xl text-base text-center text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="p-3 border rounded-lg bg-zinc-50 border-zinc-200 w-fit text-cyan-700">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="my-3">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 pt-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-base text-cyan-500">How It Works</span>
          <h3 className="text-3xl font-semibold">Why Choose Our Appointment System?</h3>
          <p className="max-w-2xl text-base text-center text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 2xl:grid-cols-3 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={index} className="transition-all hover:border-cyan-500">
              <CardHeader>
                <div className="w-10 h-10 pt-2 font-semibold text-center border rounded-lg bg-zinc-50 border-zinc-200 text-cyan-700">
                  {step.stepNumber}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription className="my-3">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="">
          <HeroVideoDialog className="max-w-screen-xl mx-auto" thumbnailSrc="/images/dashboard.png" />
        </div>
      </section>
      <section className="flex flex-col gap-10 pt-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-base text-cyan-500">Testimonials</span>
          <h3 className="text-3xl font-semibold">What Our Patients Say</h3>
          <p className="max-w-2xl text-base text-center text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 2xl:grid-cols-3 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:border-cyan-500">
              <CardHeader>
                <div className="text-cyan-700">
                  <QuoteIcon size={28} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">{testimonial.text}</p>
                <div className="mt-3 text-lg font-semibold">{testimonial.author}</div>
                <span className="text-sm text-zinc-600">{testimonial.company}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-10 pt-32" id="pricing">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-base text-cyan-500">Pricing</span>
          <h3 className="text-3xl font-semibold">Choose the Right Plan for You</h3>
          <p className="max-w-2xl text-base text-center text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quam ipsum! Blanditiis ea alias quas? Nihil delectus ipsam necessitatibus dolor?</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 2xl:grid-cols-3 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Card key={index} className="transition-all hover:border-cyan-500">
              <CardHeader className="flex flex-col gap-3">
                <div className="p-3 text-center border rounded-lg w-fit bg-zinc-50 border-zinc-200 text-cyan-700">
                  <Hammer />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">{plan.name}</h4>
                  <p className="text-sm text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorem?</p>
                </div>
                <div className="text-2xl font-semibold">{plan.price} <span className="text-sm font-normal text-zinc-500">/month</span></div>
              </CardHeader>
              <hr className="pb-6" />
              <CardContent className="flex flex-col gap-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="text-cyan-700" size={14} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">{plan.buttonText}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-32">
        <div className="grid grid-cols-12 bg-zinc-100 rounded-xl">
          <div className="flex flex-col items-center col-span-12 gap-5 p-10 text-center lg:items-start lg:text-start lg:col-span-5">
            <h5 className="text-3xl font-semibold">Ready to Schedule Your Appointment?</h5>
            <p className="text-base text-zinc-600">Take control of your health. Book your appointment now!</p>
            <Button className="w-fit">Book Now</Button>
          </div>
          <div className="col-span-7"></div>
        </div>
      </section>
    </main>
  );
}
