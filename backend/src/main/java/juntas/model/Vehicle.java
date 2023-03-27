package juntas.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "vehicles")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    //Both are foreign keys in the relationship
    private Long userId;
    private Long journeyId;

    private String vehicleColor;
    private Integer emptySeats;
    private String primaryBrand;
    private String modelName;
    private String patentNumber;
    private Boolean isVerified;


}
