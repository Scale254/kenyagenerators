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

      {/* Before / After */}
      <section className="bg-light py-20 lg:py-28">
        <div className="container-kgcs">
          <SectionHeading
            eyebrow="Before & After"
            title="Service transformations"
            description="See the difference our overhaul and repair services make."
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {beforeAfter.map((ba) => (
              <Reveal key={ba.title}>
                <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src={ba.before}
                        alt={`${ba.title} before`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-secondary/80 px-3 py-1 text-xs font-bold text-white">
                        Before
                      </span>
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src={ba.after}
                        alt={`${ba.title} after`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                        After
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
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
