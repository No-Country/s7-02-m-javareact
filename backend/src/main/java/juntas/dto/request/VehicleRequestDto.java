package juntas.dto.request;

import juntas.model.User;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public record VehicleRequestDto(

        @NotBlank(message = "The color of the vehicle may not be blank")
        String vehicleColor,
        @NotNull(message = "Empty seats of the vehicle may not be null")
        Integer emptySeats,
        @NotBlank(message = "The brand of the vehicle may not be blank")
        String primaryBrand,
        @NotBlank(message = "The model of the vehicle may not be blank")
        String modelName,
        @NotBlank(message = "The patent of the vehicle may not be blank")
        String patentNumber,
        @NotNull(message = "the driver of the vehicle may not be null")
        Long driverId,
        Boolean isVerified
) {
}
