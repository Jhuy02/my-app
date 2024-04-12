import TransitionLink from "@/components/TransitionLink";

export default async function page() {
  const res = await fetch(
    "https://astro-api.okhub-tech.com/wp-json/wp/v2/pages/295"
  );
  const data = await res.json();
  return (
    <main>
      <TransitionLink label="home" href={"/"} />
      {data?.acf?.blog?.map((e, index) => (
        <div dangerouslySetInnerHTML={{ __html: e?.blog }} key={index} />
      ))}
    </main>
  );
}
