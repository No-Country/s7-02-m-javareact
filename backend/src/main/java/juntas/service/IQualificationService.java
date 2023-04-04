package juntas.service;

import juntas.dto.qualification.QualificationRequestDto;
import juntas.dto.qualification.QualificationResponseDto;

public interface IQualificationService {

    public QualificationResponseDto createQualification(QualificationRequestDto toCreate);

    public QualificationResponseDto updateQualification(Long id, QualificationRequestDto toUpdate);

    public QualificationResponseDto getById(Long id);

    public void deleteQualification(Long id);

    //public QualificationResponseDto getByUserQualificated(Long id);



}
