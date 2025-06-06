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
  useMediaQuery,
} from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";
import { Theme } from "@mui/material/styles";

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
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmallMobile = useMediaQuery("(max-width:400px)");

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 650,
        mx: "auto",
        height: "100%",
        borderRadius: { xs: 0, sm: 3 },
        boxShadow: { xs: "none", sm: "0 8px 32px rgba(0, 0, 0, 0.08)" },
        border: { xs: "none", sm: "1px solid rgba(0, 0, 0, 0.08)" },
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: { xs: "none", sm: "translateY(-2px)" },
          boxShadow: { xs: "none", sm: "0 12px 40px rgba(0, 0, 0, 0.12)" },
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
        <Typography
          variant={isMobile ? "subtitle2" : "subtitle1"}
          color="white"
          fontWeight={600}
        >
          Order Summary
        </Typography>
      </Box>

      <CardContent
        sx={{
          p: isSmallMobile ? 1.5 : isMobile ? 2 : 3,
          "&:last-child": {
            pb: isSmallMobile ? 1.5 : isMobile ? 2 : 3,
          },
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mb: isMobile ? 2 : 3,
            display: "block",
            fontSize: isSmallMobile ? 11 : isMobile ? 12 : 13,
            lineHeight: 1.5,
            fontStyle: "italic",
            backgroundColor: "rgba(0, 0, 0, 0.02)",
            p: isSmallMobile ? 1 : 1.5,
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
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 1 : 0,
            mb: isMobile ? 1.5 : 2,
          }}
        >
          <Typography variant={isSmallMobile ? "h6" : "h5"} fontWeight={700}>
            {size} Yard Skip
          </Typography>
          <Chip
            label={`${hirePeriod} days`}
            color="primary"
            variant="outlined"
            size={isSmallMobile ? "small" : "medium"}
            sx={{
              fontWeight: 600,
              mt: isMobile ? 0.5 : 0,
              alignSelf: isMobile ? "flex-start" : "center",
            }}
          />
        </Box>

        <Divider sx={{ my: isMobile ? 1.5 : 2 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: isMobile ? 1 : 0,
            mb: isMobile ? 2 : 3,
          }}
        >
          <Typography
            variant={isSmallMobile ? "body1" : "subtitle1"}
            fontWeight={isMobile ? 500 : 600}
          >
            Total Price:
          </Typography>
          <Typography
            variant={isSmallMobile ? "h5" : isMobile ? "h4" : "h4"}
            color="primary"
            fontWeight={700}
            sx={{
              fontSize: isSmallMobile ? "1.5rem" : null,
              mt: isMobile ? 0.5 : 0,
            }}
          >
            {formatPrice(price)}
          </Typography>
        </Box>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 1.5 : 2}
          justifyContent="space-between"
          sx={{ pt: 1 }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={onBack}
            sx={{
              width: isMobile ? "100%" : "auto",
              minWidth: isMobile ? "auto" : 140,
              fontWeight: 600,
              py: isSmallMobile ? 1 : 1.2,
              borderRadius: 2,
              borderWidth: 2,
              fontSize: isSmallMobile ? "0.875rem" : null,
              "&:hover": {
                borderWidth: 2,
              },
            }}
            size={isMobile ? "medium" : "large"}
            fullWidth={isMobile}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onContinue}
            sx={{
              width: isMobile ? "100%" : "auto",
              minWidth: isMobile ? "auto" : 140,
              fontWeight: 600,
              py: isSmallMobile ? 1 : 1.2,
              borderRadius: 2,
              fontSize: isSmallMobile ? "0.875rem" : null,
              background: "linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #1565c0 0%, #0b3d91 100%)",
                boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
              },
            }}
            size={isMobile ? "medium" : "large"}
            fullWidth={isMobile}
          >
            Continue
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
