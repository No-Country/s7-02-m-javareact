package juntas.service.impl;

import juntas.dto.journey.JourneyRequestDto;
import juntas.dto.journey.JourneyResponseDto;

import juntas.exception.ResourceNotFoundException;
import juntas.mapper.GenericMapper;
import juntas.model.Journey;
import juntas.repository.JourneyRepository;
import juntas.service.IJourneyService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JourneyServiceImpl implements IJourneyService {

    private final GenericMapper mapper;
    private final JourneyRepository repository;


    @Override
    public JourneyResponseDto create(JourneyRequestDto request) {
        Journey journey = mapper.map(request, Journey.class);

        return mapper.map(repository.save(journey), JourneyResponseDto.class);
    }

    @Override
    public JourneyResponseDto update(Long id, JourneyRequestDto request) {
        Journey journey = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));



        return mapper.map(repository.save(journey), JourneyResponseDto.class);
    }

    @Override
    public JourneyResponseDto getById(Long id){
        Journey journey = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        return mapper.map(journey,JourneyResponseDto.class);
    }

    @Override
    public List<JourneyResponseDto> getAll(){
        return mapper.mapAll(repository.findAll(),JourneyResponseDto.class);
    }

    @Override
    public void delete(Long id){
        Journey journey = repository.findById(id).orElseThrow(()->new ResourceNotFoundException(""));
        repository.delete(journey);
    }

}
