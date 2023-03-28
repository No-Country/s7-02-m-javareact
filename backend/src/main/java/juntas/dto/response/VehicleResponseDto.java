package juntas.dto.response;

public record VehicleResponseDto (

         String vehicleColor,
         Integer emptySeats,
         String primaryBrand,
         String modelName,
         String patentNumber,
         Boolean isVerified
){
}
