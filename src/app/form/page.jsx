import FormDrive from "@/components/Formdrive";

export default async function page() {
  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbzpv5S7zAPCXGRYUBi4lo0KYrKzq3yDceQktBy7e7ifwfVG21GMMhiy0sviR5zGoY6E/exec?start=1&limit=5`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return <FormDrive data={data}></FormDrive>;
}
