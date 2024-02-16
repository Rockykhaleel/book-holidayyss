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

const Packages8 = () => {
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
            src="https://i.pinimg.com/564x/f1/bd/07/f1bd07ab36c60be3ae32acfc39b6cb5b.jpg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Package-8
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Nizamuddin Aulia
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Hazrat Nizamuddin Dargah is the dargah (mausoleum) of the Sufi saint
            Khwaja Nizamuddin Auliya (1238-1325 CE). Situated in the Nizamuddin
            West area of Delhi, the dargah is visited by thousands of pilgrims
            every week. The site is also known for its evening qawwali
            devotional music sessions
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Nizamuddin's tomb has a white dome. The main structure was built by
            Muhammad bin Tughluq in 1325, following Nizamuddin's death. Firuz
            Shah Tughlaq later repaired the structure and suspended four golden
            cups from the dome's recesses. Nawab Khurshid Jah of Hyderabad’s
            legendary Paigah Family gifted the marble balustrade that surrounds
            the grave. The present dome was built by Faridun Khan in 1562. The
            structure underwent many additions over the years. The dome is about
            six metres in diameter. The dargah is surrounded by a marble patio
            and is covered with intricate jalis (transl. trellis walls). The
            dargah complex also has a wazookhana (transl. ablution area)
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            The major sight seeings are
          </Typography>
          <Card className="w-96">
            <List>
              <ListItem>Jamia Masjid</ListItem>
              <ListItem>Naseeruddin Chirag e Delhi</ListItem>
              <ListItem>Red Fort</ListItem>
              <ListItem>India Gate </ListItem>
              <ListItem>Humayun Dargah </ListItem>
              <ListItem>National Rail Museum </ListItem>
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

export default Packages8;
