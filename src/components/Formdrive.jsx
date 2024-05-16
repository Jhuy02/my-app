"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
// import { TikTokEmbed } from "react-tiktok-embed";
import { TikTokEmbed } from "react-social-media-embed";
// import TikTokEmbed from "react-tiktok-embed";

export default function FormDrive({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [dataApi, setDataApi] = useState();

  const start = (Number(page) - 1) * 5 + 1;
  // get data phân trang
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbzpv5S7zAPCXGRYUBi4lo0KYrKzq3yDceQktBy7e7ifwfVG21GMMhiy0sviR5zGoY6E/exec?start=${start}&limit=5`
      );
      const resData = await res?.json();
      setDataApi(resData);
    }
    if (Number(page) > 1) {
      fetchData();
    }
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const file = event?.target?.elements?.file?.files?.[0];
    const title = event?.target?.elements?.title?.value;
    const email = event?.target?.elements?.email?.value;
    if (!email) {
      alert("nhap email de");
      return;
    }
    if (!title) {
      alert("nhap title de");
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader?.addEventListener("load", () => {
        const data = reader?.result?.split(",")[1];
        const postData = {
          name: file?.name,
          type: file?.type,
          title: title,
          email: email,
          data: data,
        };
        postFile(postData);
      });
    } else {
      const postData = {
        title: title,
        email: email,
      };
      postFile(postData);
    }
    // });
    // } else {
    //   alert("chua co anh");
    // }
  };
  // post anh len drive va gg shest
  async function postFile(postData) {
    try {
      const response =
        postData?.data &&
        (await fetch(
          "https://script.google.com/macros/s/AKfycbzpv5S7zAPCXGRYUBi4lo0KYrKzq3yDceQktBy7e7ifwfVG21GMMhiy0sviR5zGoY6E/exec",
          {
            method: "POST",
            body: JSON.stringify(postData),
          }
        ));
      const data = postData?.data && (await response.json());
      console.log(postData);
      console.log(data);
      const formdata = new FormData();
      formdata?.append("entry.6745822", postData?.title);
      postData?.data && formdata?.append("entry.341395112", data?.link);
      formdata?.append("entry.629296373", postData?.email);
      const res = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdc6roZGEyf2ijXiybsv7jfDqkVh6USt8hCz4iQYF99MNZbRw/formResponse",
        {
          method: "POST",
          body: formdata,
          mode: "no-cors",
        }
      );
      const status = await res.json();
      console.log("status", status);
      // alert("ok");
    } catch (error) {
      console.log(error);
    }
  }
  // chuyen phan trang
  const handleChangePage = (index) => {
    const conditation = index > 1 ? "?page=" + index : "";
    router.push("/form" + conditation);
  };
  const dataNew = Number(page) > 1 ? dataApi?.data : data?.data;
  console.log(dataNew);
  return (
    <section className="w-[100vw] flex flex-col justify-center items-center">
      <form action="#" className="mt-[10rem]" onSubmit={handleSubmit}>
        <input type="file" id="file" />
        <input type="text" id="title" placeholder="title" />
        <input type="email" id="email" placeholder="email" />
        <button>upload</button>
      </form>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <TikTokEmbed
          url={
            "https://www.tiktok.com/@turnio.dev/video/7358912787944426770?is_from_webapp=1&sender_device=pc&web_id=7356073222170789392"
          }
          width={325}
        />
      </div> */}
      {/* <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@qanhcamon.2/video/7358827136070798608"
        data-video-id="7358827136070798608"
        data-embed-from="embed_page"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            title="@qanhcamon.2"
            href="https://www.tiktok.com/@qanhcamon.2?refer=embed"
          >
            @qanhcamon.2
          </a>{" "}
          <p>
            đợi em nhé{" "}
            <a
              title="qanhcamon"
              target="_blank"
              href="https://www.tiktok.com/tag/qanhcamon?refer=embed"
            >
              #qanhcamon
            </a>{" "}
          </p>{" "}
          <a
            target="_blank"
            title="♬ nhạc nền - 𝕄𝕌𝕊𝕀ℂ 𝕀ℕ𝕋𝔼ℝℕ𝔼𝕋 🎧 - 𝔹ả𝕠 𝕋𝕣ươ𝕟𝕘 ✈️"
            href="https://www.tiktok.com/music/nhạc-nền-𝕄𝕌𝕊𝕀ℂ-𝕀ℕ𝕋𝔼ℝℕ𝔼𝕋-🎧-7323448962583661313?refer=embed"
          >
            ♬ nhạc nền - 𝕄𝕌𝕊𝕀ℂ 𝕀ℕ𝕋𝔼ℝℕ𝔼𝕋 🎧 - 𝔹ả𝕠 𝕋𝕣ươ𝕟𝕘 ✈️
          </a>{" "}
        </section>{" "}
      </blockquote>{" "} */}
      {/* <script async src="https://www.tiktok.com/embed.js"></script> */}
      <ul className="flex gap-x-[1vw]">
        {new Array(Math.ceil(data?.total / 5)).fill(0).map((e, index) => (
          <li
            onClick={() => handleChangePage(index + 1)}
            className="cursor-pointer"
            key={index}
          >
            {index + 1}
          </li>
        ))}
      </ul>
      <hr />
      <div className="mt-[5rem]">
        {dataNew?.map((e, index) => (
          <div key={index} className="">
            <p>{e?.title}</p>
            <p>{e?.email}</p>
            <p>{e?.dấu_thời_gian}</p>
            <hr />
            <Image
              className=""
              alt="anh"
              src={e?.image ? e?.image : "/"}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
