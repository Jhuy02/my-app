import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Animation3d() {
  return (
    <main className="h-[100vh]">
      <Scene />
      {/* <div className="h-[100vh] w-full">
        <div class="sketchfab-embed-wrapper size-full">
          <iframe
            className="size-full"
            title="Riptide tau xv battlesuit robot animated da1"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/7718324816ad4d7c8785e2fec4e924ef/embed"
          >
            {" "}
          </iframe>{" "}
        </div>
      </div> */}
    </main>
  );
}
