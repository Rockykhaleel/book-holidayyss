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
import { BreadcrumbsDefault5 } from "../Components/Breadp";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

const TABLE_HEAD = ["No of Guest", "Tour Cost Per Person"];

const TABLE_HEAD1 = ["Place", "Standard - 3 Star"];

const TABLE_ROWS = [
  {
    one: "",
    two: "Standard - 3 Star",
  },
  {
    one: "One Adult",
    two: "Rs.25,250",
  },
  {
    one: "2 Persons traveling together (Double Occupancy)",
    two: "Rs.12,750",
  },
  {
    one: "3 Persons traveling together (Triple Occupancy)",
    two: "Rs.9,750",
  },
  {
    one: "4 Persons traveling together (Triple Occupancy)",
    two: "Rs.9,250",
  },
  {
    one: "3 Persons traveling together (Triple Occupancy)",
    two: "Rs.9,750",
  },
  {
    one: "Children between 6 and 12 years",
    two: "Rs.3,000",
  },
  {
    one: "Children below 6",
    two: "Free",
  },
];
const TABLE_ROWS1 = [
  {
    one: "Ooty",
    two: "Hotel Darshan, Hotel Lake View, Hotel Preethi Classic, Ponmari Residency",
  },
];

const Package2 = () => {
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
            src="https://images.unsplash.com/photo-1613102789984-863cc1b91ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-2
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Ooty Honeymoon package
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            What better way than to spend quality time between a newly wedded
            couple ? An array of honeymoon packages designed in a manner that
            offers beyond imagination attraction to honeymooners, will be etched
            in memories which and will hold on for a life time. These packages
            are carefully designed with romantic theme to help honeymooners to
            know one another intimately at ooty.
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Ooty is one of the most beautiful hill stations with serene Tea
            plantations among the hills. It has serene Botanical gardens, Garden
            nestled in the beautiful lush green hills. You are sure to be
            enchanted by the beauty of Ooty & Coonoor & will be craving to come
            back again. Coonoor is also one of the most popular Hill Station
            after Ooty known for Dolphins nose Viewpoint, Catherine falls & Laws
            falls, making it a beautiful Honeymoon location for couples and
            newly married.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            It has many sight seeings
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Botanical garden</ListItem>
              <ListItem>Boat House</ListItem>
              <ListItem>Government Museum</ListItem>
              <ListItem>Mudumalai Tiger reserve </ListItem>
              <ListItem>Pykara water falls</ListItem>
              <ListItem>Wenlock shooting point </ListItem>
              <ListItem>Tea and chocolate factory</ListItem>
              <ListItem>Ooty Hill station</ListItem>
              <ListItem>Nilgiri Train raid</ListItem>
              <ListItem>Pine forest</ListItem>
              <ListItem>Jungle Safari</ListItem>
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
            {TABLE_ROWS.map(({ one, two }, index) => {
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
            Day1 : Bangalore/Ooty
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Pick up from Bangalore Airport / Railway station and drive to Ooty
            called the Queen of Hill Stations picturesque, green Udhagamandalam
            better known as Ooty, is the most popular hill station in the South,
            Enroute visit Bandipur National Park and Madumalai National Park, on
            arrival check in to a hotel, evening free and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Day2 : Ooty
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Morning breakfast, proceed for full day sight seeing visit Botanical
            Garden - is spread over 22 hectares ascending the slopes on the
            hill, Rose Garden - the rose varieties planted in this park were
            assembled from different sources with 17,256 rose plants from 1919
            varieties, Deer Park, is one of the high altitude animal park in
            India, Doddabetta is highest peak (2634 meters) in the Nilgiris,
            Ooty Lake - which extends to an area of 65 acres, good for boating.
            Return to hotel and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Day3 : Ooty/Coonoor/Ooty
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Morning breakfast, half-day tour to Coonoor - is a small town with
            an equable climate that has made it in its own right, visit Dolphins
            Nose - Ideally visited in the morning, you can get a beautiful view
            of the Catherine falls from here, Lamb's Rock- this view point is
            within a reserve forest with a phenomenal view of vast stretches of
            forests all the way to the Coimbatore plains, Law's Falls - is a
            paradise for naturalists, Katery Falls- water from the Katery dam
            flows as a falls. This is one of the highest falls in the Nilgiris.
            Return to hotel, evening free and overnight.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            Day4 : Ooty/ Bangalore
          </AccordionHeader>
          <AccordionBody className="p-10 text-lg">
            Morning breakfast checkout and drive to Bangalore. On arrival drop
            to Airport / Railway station to board the train / flight for further
            destination. Tour Ends.
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
            3 Nights stay in the Hotel / Resort (as per category chosen), with
            breakfast + Taxes.
          </ListItem>
          <ListItem>
            All accommodation in base category rooms, unless specified
            otherwise.
          </ListItem>
          <ListItem>
            Transportation by A/C Car, driver allowance, fuel, interstate tax,
            parking charges as per the itinerary only. Driving from morning
            08.00am to 21.00hrs
          </ListItem>
        </List>
        <Typography variant="p" color="gray" className="mb-4 uppercase">
          Excludes
        </Typography>
        <List>
          <ListItem>Lunch/Dinner wherever not specified.</ListItem>
          <ListItem>
            Expenses personal in nature like tips, laundry, telephones etc.
          </ListItem>
          <ListItem>Flight & Train Tickets.</ListItem>
          <ListItem>
            Entrance to all attraction points, boating, camera charges etc.
          </ListItem>
          <ListItem>
            Any expenses arising out of any force majeure circumstances like
            political situations etc.
          </ListItem>
          <ListItem>Any service not specified in the inclusions.</ListItem>
          <ListItem>GST</ListItem>
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
            {TABLE_ROWS1.map(({ one, two }, index) => {
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

export default Package2;
