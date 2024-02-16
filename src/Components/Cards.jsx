import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import train from "../assets/train.png";
import plane from "../assets/transport.png";
import hotel from "../assets/hotel.png";
import bus from "../assets/bus-school.png";
import taxi from "../assets/taxi.png";
import travel from "../assets/travel-luggage.png";

const Cards = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="text-center">
          Need Our Service, Fill Out The Form Below To Get in Toch With Us.
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-row gap-14 mb-3">
            <div className="w-2/5">
              <Input label="Name" />
            </div>
            <div className="w-2/5">
              <Input label="Email Address" />
            </div>
          </div>
          <div className="flex flex-row gap-14 mb-3">
            <div className="w-2/5">
              <Input label="Phone Number" />
            </div>
            <div className="w-2/5">
              <Input label="City Of Residence" />
            </div>
          </div>
          <div className="flex flex-row gap-14 mb-3">
            <div className="w-2/5">
              <Input label="Travel From" type="date" />
            </div>
            <div className="w-2/5">
              <Input label="Travel To" type="date" />
            </div>
          </div>
          <div className="flex flex-row gap-14 mb-3">
            <div className="w-2/5">
              <Input label="Number of People" />
            </div>
            <div className="w-2/5">
              <Input label="Vacation Type" />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <h5 className="block mt-5 mb-2 font-sans text-3xl mx-auto text-center antialiased font-semibold leading-snug tracking-normal">
        Services
      </h5>
      <div className="flex flex-col md:flex-row justify-around mt-5 mb-10">
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={train} className="h-12 w-12" />
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Train Booking
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={plane} className="h-12 w-12" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Flight Booking
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={hotel} className="h-12 w-12" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Hotel Booking
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="flex flex-col md:flex-row justify-around my-10">
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={taxi} className="h-12 w-12" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Cab Booking
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={bus} className="h-12 w-12" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Bus Booking
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
        <Card className="mt-6 w-96" onClick={handleOpen}>
          <CardBody>
            <img src={travel} className="h-12 w-12" />

            <Typography variant="h5" color="blue-gray" className="mb-2">
              Travel Packages
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Cards;
