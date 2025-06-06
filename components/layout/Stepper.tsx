"use client";

import { Box, Step, StepLabel, Stepper as MuiStepper } from "@mui/material";
import {
  LocationOn as AddressIcon,
  Delete as WasteTypeIcon,
  Storage as SkipIcon,
  CreditCard as CheckoutIcon,
  CheckCircle as PermitCheckIcon,
  CalendarToday as DateIcon,
} from "@mui/icons-material";

const steps = [
  { label: "Postcode", icon: <AddressIcon /> },
  { label: "Waste Type", icon: <WasteTypeIcon /> },
  { label: "Select Skip", icon: <SkipIcon /> },
  { label: "Permit Check", icon: <PermitCheckIcon /> },
  { label: "Choose Date", icon: <DateIcon /> },
  { label: "Payment", icon: <CheckoutIcon /> },
];

type Props = {
  activeStep: number;
};

export default function Stepper({ activeStep }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        my: 4,
        px: 2,
        "& .MuiStepIcon-root": {
          color: "grey.300",
          "&.Mui-completed, &.Mui-active": {
            color: "primary.main",
          },
        },
        "& .MuiStepLabel-label": {
          fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
          "&.Mui-active, &.Mui-completed": {
            fontWeight: 600,
          },
        },
      }}
    >
      <MuiStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label} completed={index < activeStep}>
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor:
                      index === activeStep
                        ? "primary.main"
                        : index < activeStep
                        ? "primary.light"
                        : "grey.200",
                    color:
                      index <= activeStep ? "common.white" : "text.secondary",
                  }}
                >
                  {step.icon}
                </Box>
              )}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </Box>
  );
}
