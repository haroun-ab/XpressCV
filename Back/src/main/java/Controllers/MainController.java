package Controllers;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class MainController {

    @PostMapping("/generate")
    public void generateCV(@RequestBody Map<String, Object> requestBody) {
        System.out.print(requestBody);
    }
}