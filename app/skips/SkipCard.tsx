"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { Skip } from "./types";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  skip: Skip;
  onSelect?: () => void;
};

export default function SkipCard({ skip, onSelect }: Props) {
  return (
    <Card
      sx={{
        width: 380,
        borderRadius: 3,
        transition: "all 0.3s ease",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 28px rgba(0, 123, 255, 0.15)",
          borderColor: "rgba(0, 123, 255, 0.3)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={`${skip.image}`}
        alt={`Skip size ${skip.size}`}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />

      <CardContent sx={{ px: 2.5, pt: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1.5,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            {`${skip.size} yd³ Skip`}
          </Typography>
          <Typography variant="h6" fontWeight={700} color="primary">
            {formatPrice(skip.price_before_vat * (1 + skip.vat / 100))}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            label={`${skip.hire_period_days} days hire`}
            size="small"
            sx={{ backgroundColor: "#e3f2fd", fontWeight: 500 }}
          />
          {skip.allows_heavy_waste && (
            <Chip
              label="Heavy waste"
              size="small"
              color="success"
              sx={{ fontWeight: 500 }}
            />
          )}
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            mb: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: skip.allowed_on_road ? "success.main" : "error.main",
                mr: 1,
              }}
            />
            {skip.allowed_on_road ? "Road placement" : "Off-road only"}
          </Typography>

          <Typography variant="body2">
            <Box
              component="span"
              sx={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: skip.allows_heavy_waste
                  ? "success.main"
                  : "error.main",
                mr: 1,
              }}
            />
            {skip.allows_heavy_waste ? "Heavy waste" : "No heavy waste"}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5 }}>
        <Button
          fullWidth
          variant="contained"
          size="medium"
          sx={{
            py: 1.2,
            borderRadius: 2,
            fontWeight: 600,
            textTransform: "none",
            background: "linear-gradient(90deg, #1976d2 0%, #0d47a1 100%)",
            "&:hover": {
              background: "linear-gradient(90deg, #1565c0 0%, #0b3d91 100%)",
            },
          }}
          onClick={onSelect}
        >
          Select Skip
        </Button>
      </CardActions>
    </Card>
  );
}
