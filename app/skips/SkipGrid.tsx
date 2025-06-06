"use client";

import Grid from "@mui/material/Grid";
import SkipCard from "./SkipCard";
import SkipDetailsCard from "./SkipDetailsCard";
import { useState } from "react";
import { Skip } from "./types";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

type Props = {
  skips: Skip[];
};

export default function SkipGrid({ skips }: Props) {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1400,
        mx: "auto",
        px: { xs: 2, sm: 3, md: 4 },
        py: 4,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        {skips.map((skip) => (
          <Grid
            key={skip.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <SkipCard skip={skip} onSelect={() => setSelectedSkip(skip)} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedSkip}
        onClose={() => setSelectedSkip(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxWidth: 650,
            p: 0,
            height: "auto",
            backgroundImage: "none",
            boxShadow: "0 16px 48px rgba(0, 0, 0, 0.16)",
            overflow: "hidden",
          },
        }}
      >
        {selectedSkip && (
          <SkipDetailsCard
            size={selectedSkip.size}
            price={selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)}
            hirePeriod={selectedSkip.hire_period_days}
            onBack={() => setSelectedSkip(null)}
            onContinue={() => alert("Continue with skip " + selectedSkip.id)}
          />
        )}
      </Dialog>
    </Box>
  );
}
