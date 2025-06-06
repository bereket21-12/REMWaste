"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";

interface SkipDetailsCardProps {
  size: number;
  price: number;
  hirePeriod: number;
  onBack: () => void;
  onContinue: () => void;
}

export default function SkipDetailsCard({
  size,
  price,
  hirePeriod,
  onBack,
  onContinue,
}: SkipDetailsCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 650,
        mx: "auto",
        height: "100%",
        borderRadius: 3,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          py: 1,
          px: 2,
          background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
        }}
      >
        <Typography variant="subtitle1" color="white" fontWeight={600}>
          Order Summary
        </Typography>
      </Box>

      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mb: 3,
            display: "block",
            fontSize: 13,
            lineHeight: 1.5,
            fontStyle: "italic",
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            p: 1.5,
            borderRadius: 1,
          }}
        >
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification. Colors may vary, and options
          may be featured at additional cost.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            {size} Yard Skip
          </Typography>
          <Chip
            label={`${hirePeriod} days`}
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 600 }}
          />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Total Price:
          </Typography>
          <Typography variant="h4" color="primary" fontWeight={700}>
            {formatPrice(price)}
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          sx={{ pt: 1 }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={onBack}
            sx={{
              minWidth: 140,
              fontWeight: 600,
              py: 1.2,
              borderRadius: 2,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
              },
            }}
            size="large"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onContinue}
            sx={{
              minWidth: 140,
              fontWeight: 600,
              py: 1.2,
              borderRadius: 2,
              background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #1565c0 0%, #0b3d91 100%)",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              },
            }}
            size="large"
          >
            Continue
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
