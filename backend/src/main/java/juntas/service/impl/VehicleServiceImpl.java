package juntas.service.impl;

import juntas.dto.request.VehicleRequestDto;
import juntas.dto.response.VehicleResponseDto;
import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Vehicle;
import juntas.repository.VehicleRepository;
import juntas.service.IVehicleService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VehicleServiceImpl implements IVehicleService {

    private final GenericMapper mapper;
    private final VehicleRepository repository;


    @Override
    public VehicleResponseDto create(VehicleRequestDto request) {
        Vehicle vehicle = mapper.map(request, Vehicle.class);

        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto update(Long id,VehicleRequestDto request) {
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));

        vehicle.setVehicleColor(request.vehicleColor());
        vehicle.setEmptySeats(request.emptySeats());
        vehicle.setPrimaryBrand(request.primaryBrand());
        vehicle.setModelName(request.modelName());
        vehicle.setPatentNumber(request.patentNumber());
        vehicle.setIsVerified(request.isVerified());

        return mapper.map(repository.save(vehicle), VehicleResponseDto.class);
    }

    @Override
    public VehicleResponseDto getById(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(vehicle,VehicleResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Vehicle vehicle = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(vehicle);
    }

}
