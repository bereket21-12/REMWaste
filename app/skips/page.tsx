import Footer from "@/components/layout/Footer";
import Stepper from "@/components/layout/Stepper";
import SkipGrid from "./SkipGrid";
import { getSkips } from "@/lib/getSkips";

export default async function SkipPage() {
  const skips = await getSkips();

  return (
    <>
      <main>
        <Stepper activeStep={2} />
        <h1 style={{ textAlign: "center", margin: "1rem 0" }}>
          Choose Your Skip Size
        </h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Select the skip size that best suits your needs
        </p>

        <SkipGrid skips={skips} />
      </main>
      <Footer />
    </>
  );
}
