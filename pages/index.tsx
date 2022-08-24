import { Box, Typography, Button } from "@mui/material";
import { homeContainer } from "../styles/Home";
import { PageProps } from "../type/types";
import Image from "next/image";
import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import config from "../config.json";
import Head from "next/head";
const Home = ({ darkMode }: PageProps) => {
  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
      </Head>
      <Box sx={homeContainer(darkMode)}>
        <Image
          src={config.apiEndPoint}
          loading="eager"
          width="800"
          height="400"
          style={{ borderRadius: "15px" }}
        />
        <Typography
          sx={darkMode ? { mt: "10px", color: "#fff" } : { mt: "10px" }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </Typography>
        <Link href="/about-us">
          <Button
            sx={{ width: 200 }}
            variant="contained"
            endIcon={<ArrowCircleLeftIcon />}
          >
            درباره ما
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Home;
