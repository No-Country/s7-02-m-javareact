package juntas.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "journeys")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Journey implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //Foreign Key How??
    private Long userId;
    private LocalDate createDate;
    private LocalDateTime departure;
    private LocalDate arrivalDate;


}
