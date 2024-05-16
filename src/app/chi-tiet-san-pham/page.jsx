import TransitionLink from "@/components/TransitionLink";

export default async function page() {
  const res = await fetch(
    "https://duc-anh.okhub-tech.com/wp-json/wp/v2/pages?slug=quy-doi-diem-gpa"
  );
  const data = await res.json();
  {
    data[0].acf.diem_gpa_pho_bien.map((e, index) => {
      e.table_diem_pho_bien.map((e, index) => {
        // console.log(e);
        e.table_title.map((e, index) => {
          // console.log(e);
        });
        e.table_row.map((e, index) => {
          // console.log("aagshgd", e);
          e.table_label.map((e, index) => {
            console.log(e.label_value);
          });
          console.log("het");
        });
      });
    });
  }
  // return (
  //   <main>
  //     <TransitionLink label="home" href={"/"} />
  //     {data?.acf?.blog?.map((e, index) => (
  //       <div dangerouslySetInnerHTML={{ __html: e?.blog }} key={index} />
  //     ))}
  //   </main>
  // );
}
