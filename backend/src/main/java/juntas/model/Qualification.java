package juntas.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "qualifications")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Qualification implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualificationId;
    private Long fromUserId;
    private String comment;
    private Integer qualificationQuantity;

}
