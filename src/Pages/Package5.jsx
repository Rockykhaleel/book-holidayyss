import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BreadcrumbsDefault5 } from "../Components/Breadp";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const TABLE_HEAD = ["Pricing", "Deluxe 3 Star", "Premium 4 Star"];

const TABLE_HEAD1 = [
  "City",
  "3 Star Hotel",
  "4 Star Hotels",
  "Meal Plan",
  "No of Nights",
];

const TABLE_ROWS = [
  {
    one: "Cost Per person",
    two: "",
    three: "",
  },
  {
    one: "2 Persons travelling together (Double Occupancy)",
    two: "Rs.28000",
    three: "Rs.9000",
  },
  {
    one: "3 Persons traveling together (Triple Occupancy)",
    two: "Rs.21000",
    three: "Rs.30000",
  },
  {
    one: "4 Persons traveling together (2 Double Occupancy)",
    two: "Rs.20000",
    three: "Rs.30000",
  },
  {
    one: "Children between 6 and 12 years",
    two: "Rs.7250",
    three: "Rs.13000",
  },
  {
    one: "Children below 5",
    two: "Free",
    three: "Free",
  },
];
const TABLE_ROWS1 = [
  {
    one: "Ooty",
    two: "Delightz Inn or Similar",
    three: "Club Mahindra or Similar",
    four: "CPAI",
    five: "2",
  },
  {
    one: "Coorg",
    two: "Coorg Palace or Similar",
    three: "Club Mahindra or Similar",
    four: "CPAI",
    five: "2",
  },
  {
    one: "Mysore",
    two: "Rio Meridian or Similar",
    three: "J P Palace or Similar",
    four: "CPAI",
    five: "1",
  },
];

const Package5 = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div>
      <BreadcrumbsDefault5 />
      <Card className="w-full flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1650612157176-b9e3b50c24b6?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-5
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Bangalore, Coorg, ooty and Mysore
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Nature's beautiful trinity in South India! A journey that combines
            the heavenly hill stations of Ooty Coorg with the cultural yet
            contemporary vibe of Mysore city. Watch stunning landscapes unfold
            at the Nilgiri ranges and experience grandeur & opulence at the
            cultural capital of Karnataka, Mysore. Come for your honeymoon,
            anniversary, family vacation, trekking, rafting, soft adventure or
            just to rejuvenate yourself! We will make sure that you come again
            and again to this heaven on earth !!! Our tour guides and chauffeurs
            are experts in their respective fields and will lead you to places &
            people that you will cherish for many a year to come….!
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Adventure seekers and travellers looking for new destination vistas
            are what excite us and have kept us going since many years. We have
            a team of dedicated travel consultants working 24/7 to ensure that
            you don’t miss out on anything while at Coorg. We thrive on the
            appreciation our customers shower on us for our service &
            reciprocate by giving them an outstanding experience every time.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            The major sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Raja seat</ListItem>
              <ListItem>Madikeri fort</ListItem>
              <ListItem>Abbey falls</ListItem>
              <ListItem>Iruppu falls </ListItem>
              <ListItem>Golden temple</ListItem>
              <ListItem>Tala cauvery </ListItem>
              <ListItem>Dubare Forest and Elephant camp</ListItem>
              <ListItem>Cauvery Nisarga Dhama</ListItem>
            </List>
          </Card>
          <a href="contact" className="inline-block mt-7">
            <Button variant="text" className="flex items-center gap-2">
              Book Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      <Card className="h-full min-w-fit overflow-scroll m-10">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Tariff
        </Typography>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ one, two, three }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={one}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {one}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {two}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {three}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <a href="contact" className="inline-block mt-7">
          <Button variant="text" className="flex items-center gap-2">
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </Card>
      <Card className="h-full w-fit overflow-scroll m-10">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Itinary
        </Typography>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Day 1 : Tue : Bangalore / Ooty: (300Kms / 6 Hrs)
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Meet at Hotel Maurya at 7:30 Hrs and drive to Ooty, on arrival check
            into hotel lunch and proceed to visit half day local sightseeing
            visit, Doddabetta peak, Botanical garden, Ooty Lake. Back to hotel
            dinner and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Day 2 : Wed : Ooty / Coonoor / Ooty
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Breakfast, proceed at 09.00am for full day sightseeing visit Pykara
            water falls, Rose garden- the rose varieties planted in this park
            were assembled from different sources with 17,256 rose plants from
            1919 varieties, 12.00noon, board Toy Train at Ooty to Coonoor, at
            1.15pm board your car at Coonoor and proceed for sightseeing, visit
            Sim’s Park, Dolphin’s Nose view point, Lamb’s rock, etc., evening
            visit tea plantation and Tea factory. Return to hotel for dinner and
            overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Day 3 : Thu : Ooty/Coorg-Madikeri (280 Km/6Hrs)
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Morning breakfast checkout and drive to Coorg-Madikeri, en-route
            visit Bylakuppe - largest Tibetan settlement in South India. The
            temple has 62 feet Buddha statues covered with gold plate wonderful
            sight anytime, Cauvery Nisargadhama - is a formed by river Cauvery
            and is used as a picnic spot island, with foliage of thick bamboo
            groves, On arrival check into hotel for and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            Day 4 : Fri : Coorg-Madikeri – Local
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Breakfast, proceed to visit Bhagamandala - situated at confluence of
            two rivers, the Cauvery and the Kanika. A thrice the Sujyothi is
            said to join from underground. It is considered as a river
            confluence, visit Talacauvery - known as Dakshin kannada the
            birthplace of river Cauvery at the foot of the breath Brahmagiri
            Hills, Abbey Falls, Omkareshwara Temple and Raja Seat. Back to hotel
            for dinner. Overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            Day 5 : Sat : Coorg-Madikeri/Mysore (120 Km/3Hrs)
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Early breakfast checkout at 08.00am and drive to Mysore, en-route
            visit Dubare Elephant Camp (to reach the place before 09.00Hrs)
            offer the experience with Elephants consisting of elephant Grooming
            feeding, Later drive to Mysore. On arrival check into hotel. Later
            proceed to visit Maharaja Palace - the palace is a splendid
            structure the Indo-Saracenic style, among its many attractions are a
            magnificent gold throne. St. Philomena's Church - this imposing
            ethic structure with beautiful stained-glass windows and lofty
            powers is a must see. Later in the evening visit Brindavan Garden,
            musical fountains and coloured lights transform this place into a
            magical fairyland. Return to hotel for dinner and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(6)}>
            Day 6 : Sun : Mysore / Bangalore (140Kms/3 Hrs)
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Breakfast checkout and proceed to visit Chamundi Hill - preached
            atop a hill. The 4.8m tall monolith of Nandi and the gigantic
            Mahishasura statue are added attractions. Later drive Bangalore
            en-route visit Seringapatam - Island fortress of Tippu Sultan. Visit
            Tippu's summer Palace, Mosque, Sri Ranganatha Temple. On arrival
            drop to Hotel Maurya at 19.00hrs.
          </AccordionBody>
        </Accordion>
      </Card>

      <Card className="h-full min-w-fit overflow-scroll m-10">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          INCLUDES & EXCLUDES
        </Typography>
        <Typography
          variant="p"
          color="gray"
          className="mb-4 uppercase underline-offset-2"
        >
          Includes
        </Typography>
        <List>
          <ListItem>
            Accommodation on twin / triple sharing basis with breakfast and
            taxes
          </ListItem>
          <ListItem>
            Transportation by A/C Sedan or Innova as per the Itinerary
          </ListItem>
          <ListItem>Entrance to all attractions</ListItem>
          <ListItem>
            Driver Allowance, Parking, Toll and Interstate Taxes.
          </ListItem>
          <ListItem>5% GST</ListItem>
        </List>
        <Typography variant="p" color="gray" className="mb-4 uppercase">
          Excludes
        </Typography>
        <List>
          <ListItem>Lunch and Dinner Wherever not mentioned</ListItem>
          <ListItem>
            Expenses personal in nature like tips, laundry, telephones, camera
            fee, etc.
          </ListItem>
          <ListItem>
            Any expenses arising out of any force majeure circumstances like
            political situations etc..
          </ListItem>
          <ListItem>Any service not specified in the inclusions..</ListItem>
        </List>
      </Card>

      <Card className="h-full min-w-fit overflow-scroll m-10">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          Hotels
        </Typography>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD1.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS1.map(({ one, two, three, four, five }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={one}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {one}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {two}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {three}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {four}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {five}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <a href="contact" className="inline-block mt-7">
          <Button variant="text" className="flex items-center gap-2">
            Book Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default Package5;
