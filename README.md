# Travel To Future
Demo flight search app that uses mock data. Deployed using Vercel. You can check out this project at https://www.erencantasbas.com/ .

## Technologies
- Next.js 14
- Tailwindcss
- Mongodb
- TanstackQuery

## Data
Mock data is generated using pandas. To generate the data, European airports list (244 airports) was used. Using combination of each, around 1.2 million records were generated. 
This flight data also contains random European airline, flight number that is generated using airline code and random 3-4 digit number and a random start date. To reduce the data, each day only 0-3 flights were kept between normal airports and 0-10 flights were kept between major airports (such as Istanbul Airport). To further reduce the data count to around 1.2 million, date of the flights was set between begining and end of February. This limit were also reflected on the Front-end.

## Image
An AI tool was used to generate the dummy image on the page.
