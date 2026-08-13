import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages, beforeAfter } from "@/data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at our generator installations, air compressor projects, electrical works and equipment servicing.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Our work in pictures — installations, servicing and completed projects."
        crumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading eyebrow="Our Work" title="Photo gallery" />
          <div className="mt-14">
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
      </section>

      {/* Service Transformations */}
      <section className="bg-light py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            title="Service transformations"
            description="See the difference our overhaul and repair services make."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {beforeAfter.map((ba) => (
              <Reveal key={ba.title}>
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={ba.image}
                      alt={ba.title}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-secondary">
                      {ba.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink/65">{ba.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
