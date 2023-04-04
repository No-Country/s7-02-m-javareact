package juntas.dto.vehicle;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class VehicleResponseDto{

    private Long vehicleId;
    private String vehicleColor;
    private Integer emptySeats;
    private String primaryBrand;
    private String modelName;
    private String patentNumber;
    private Long driverId;
    private Boolean isVerified;
}
