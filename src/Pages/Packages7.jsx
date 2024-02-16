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

const Packages7 = () => {
  return (
    <div>
      {" "}
      <BreadcrumbsDefault5 />
      <Card className="w-full flex-row my-10">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://i.pinimg.com/564x/dc/e2/41/dce241a8059a153175967d1b6a3c9bf3.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-7
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Gulbarga
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Hazrat Khwaja Banda Nawaz Gesu Daraz (name at birth: Syed Muhammad
            Hussaini) (Urdu:) (July 13, 1321 -November 1, 1422), was a famous
            Sufi saint from India of Chishti Order, who advocated understanding,
            tolerance and harmony among various religious groups.
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Gisu Daraz was a murid (disciple) of the noted Sufi saint of Delhi,
            Hazrat Nasiruddin Chiragh Dehlavi, who in turn was a disciple of
            Nizamuddin Auliya, the spiritual master of Delhi. After the death of
            his master, Chiragh Dehlavi, Gisu Daraz took on the mantle of the
            successor (khalifa). Thus later on when he moved to Daulatabad
            around 1398, owing to the attack of Timur on Delhi, he took the
            Chishti Order to South India. He finally settled down in Gulbarga,
            at the invitation of Bahamani King, {"Taj ud-Din Firuz Shah"} (r.
            1397-1422).
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            The major sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Bande Nawaz</ListItem>
              <ListItem>Gulbarga Fort</ListItem>
              <ListItem>Jamia Masjid</ListItem>
              <ListItem>Kalaburagi </ListItem>
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
    </div>
  );
};

export default Packages7;
