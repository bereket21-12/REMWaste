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
  Tooltip,
} from "@mui/material";
import { Skip } from "./types";
import { formatPrice } from "@/utils/formatPrice";
import { CheckCircle, Warning, LocalShipping } from "@mui/icons-material";

type Props = {
  skip: Skip;
  onSelect?: () => void;
  isSelected?: boolean;
};

export default function SkipCard({
  skip,
  onSelect,
  isSelected = false,
}: Props) {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 350, md: 380 },
        borderRadius: 3,
        transition: "all 0.3s ease",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: isSelected
          ? "2px solid #1976d2"
          : "1px solid rgba(0, 0, 0, 0.05)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 28px rgba(25, 118, 210, 0.2)",
        },
      }}
    >
      {isSelected && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "50%",
            width: 32,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
          }}
        >
          <CheckCircle fontSize="small" />
        </Box>
      )}

      <CardMedia
        component="img"
        height="200"
        image={skip.image || "/skip-placeholder.jpg"}
        alt={`${skip.size} cubic yard skip`}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          filter: isSelected ? "brightness(1.05)" : "none",
        }}
      />

      <CardContent sx={{ px: 3, pt: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight={700} sx={{ fontSize: "1.1rem" }}>
            {skip.size} yd³ Skip
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color="primary"
            sx={{ fontSize: "1.1rem" }}
          >
            {formatPrice(skip.price_before_vat * (1 + skip.vat / 100))}
            <Typography
              component="span"
              variant="caption"
              color="text.secondary"
              sx={{ ml: 0.5 }}
            >
              +VAT
            </Typography>
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 2.5 }}>
          <Chip
            label={`${skip.hire_period_days} day hire`}
            size="small"
            sx={{
              backgroundColor: "rgba(25, 118, 210, 0.1)",
              fontWeight: 500,
              color: "primary.dark",
            }}
          />
          {skip.allows_heavy_waste && (
            <Tooltip title="Can dispose of construction waste, soil, and heavy materials">
              <Chip
                label="Heavy waste"
                size="small"
                color="success"
                sx={{ fontWeight: 500 }}
                icon={<LocalShipping fontSize="small" />}
              />
            </Tooltip>
          )}
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1.5,
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {skip.allowed_on_road ? (
              <CheckCircle color="success" fontSize="small" sx={{ mr: 1 }} />
            ) : (
              <Warning color="warning" fontSize="small" sx={{ mr: 1 }} />
            )}
            <Typography variant="body2">
              {skip.allowed_on_road ? "Road placement" : "Off-road only"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {skip.allows_heavy_waste ? (
              <CheckCircle color="success" fontSize="small" sx={{ mr: 1 }} />
            ) : (
              <Warning color="warning" fontSize="small" sx={{ mr: 1 }} />
            )}
            <Typography variant="body2">
              {skip.allows_heavy_waste ? "Heavy waste" : "Light waste only"}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3 }}>
        <Button
          fullWidth
          variant={isSelected ? "outlined" : "contained"}
          size="medium"
          sx={{
            py: 1.3,
            borderRadius: 2,
            fontWeight: 600,
            letterSpacing: 0.5,
            textTransform: "none",
            fontSize: "0.95rem",
            background: isSelected
              ? "transparent"
              : "linear-gradient(90deg, #1976d2 0%, #0d47a1 100%)",
            color: isSelected ? "primary.main" : "white",
            border: isSelected ? "2px solid" : "none",
            "&:hover": {
              background: isSelected
                ? "rgba(25, 118, 210, 0.08)"
                : "linear-gradient(90deg, #1565c0 0%, #0b3d91 100%)",
            },
          }}
          onClick={onSelect}
          startIcon={isSelected ? <CheckCircle fontSize="small" /> : null}
        >
          {isSelected ? "Selected" : "Select Skip"}
        </Button>
      </CardActions>
    </Card>
  );
}
