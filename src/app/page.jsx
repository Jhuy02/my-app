import HomeSmoother from "@/components/HomeSmoother";
import Smoother2 from "@/components/Smoother2";
import Smoother3 from "@/components/Smoother3";
import TransitionLink from "@/components/TransitionLink";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="flex gap-[2rem]">
        <TransitionLink href={"/chi-tiet-san-pham"}>Chi tiết</TransitionLink>
        <TransitionLink href={"/smoother3"}>Smoother 3</TransitionLink>
        <TransitionLink href={"/home-smoother"}>home-smoother</TransitionLink>
        <TransitionLink href={"/form"}>FORM</TransitionLink>
        <TransitionLink href={"/animation3d"}>3D</TransitionLink>
      </div>
      {/* <Smoother3 /> */}
      <Smoother2 />
      {/* <HomeSmoother />; */}
    </>
  );
}
