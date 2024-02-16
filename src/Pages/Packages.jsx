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

const TABLE_HEAD = ["Etios", "	Innova/Ertiga ", "Crysta"];

const TABLE_HEAD1 = [".", "Etios", "	Innova/Ertiga ", "Crysta"];

const TABLE_ROWS = [
  {
    Etios: "AC",
    Innova: "AC",
    Crysta: "AC",
  },
  {
    Etios: "4+1",
    Innova: "6+1",
    Crysta: "6+1",
  },
  {
    Etios: "Rs.3550/-",
    Innova: "Rs.4350/-",
    Crysta: "Rs.5350/-",
  },
];

const TABLE_ROWS1 = [
  {
    dot: "Extra Kilo meter",
    Etios: "13",
    Innova: "16",
    Crysta: "20",
  },
  {
    dot: "Extra Hour",
    Etios: "250",
    Innova: "350",
    Crysta: "400",
  },
  {
    dot: "Driver Bata",
    Etios: "300",
    Innova: "350",
    Crysta: "350",
  },
];

const Packages = () => {
  return (
    <div>
      <BreadcrumbsDefault5 />

      <Card className="w-full flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5  shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1523544545175-92e04b96d26b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-image"
            className="h-full w-full  object-cover"
          />
        </CardHeader>
        <CardBody className="xs:w-3/5">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-1
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Explore Mysore
          </Typography>
          <Typography color="gray" className="mb-8 font-normal break-words">
            Book Holidays is South India’s leading travel agency with vast
            experience in Tourism and Hospitality. We’re backed by our
            experience and expertise in the hospitality industry and live by the
            motto, ‘Customer Delight.’ At Go Holidays, we create customized
            tours and holiday packages in and around Mysore using customer
            profiling.
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Few of the prominent sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Mysore palace</ListItem>
              <ListItem>Mysore Zoo</ListItem>
              <ListItem>KRS/ Brindavan Garden</ListItem>
              <ListItem>Jagan mohan art gallery </ListItem>
              <ListItem>Chamundi Hills</ListItem>
              <ListItem>Karanji Lake </ListItem>
              <ListItem>Masjid e Azam</ListItem>
              <ListItem>St. Philomena church</ListItem>
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
      <Card className="h-full w-full overflow-scroll m-10">
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
            {TABLE_ROWS.map(({ Etios, Innova, Crysta }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={Etios}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Etios}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Innova}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Crysta}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Typography variant="h6" color="gray" className="mt-4 uppercase">
          Note
        </Typography>
        <Card className="w-full my-4">
          <List>
            <ListItem>
              Fraction of hours and Kms will be charged as one and calculated
              from Office to office.
            </ListItem>
            <ListItem>
              Parking, entry fee and taxes if any shall be borne by client.
            </ListItem>
            <ListItem>
              Driving before 06.00hrs and after 21.00hrs attracts double driver
              allowance.
            </ListItem>
            <ListItem>
              Rates are subject to change with / without prior notice.
            </ListItem>
            <ListItem>Service tax of 5.80% extra on the total bill.</ListItem>
            <ListItem>
              We provide the transport at the scheduled time. If the Guest are
              not able to visit the sightseeing places well in time, spot the
              animals or participate in local activities, due to reasons beyond
              our control, we are not responsible.
            </ListItem>
          </List>
        </Card>
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
            {TABLE_ROWS1.map(({ dot, Etios, Innova, Crysta }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={dot}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {dot}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Etios}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Innova}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {Crysta}
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

export default Packages;
