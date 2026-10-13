/**
 * @summary Showroom Section Assembler
 * @author Piero Francisco Montes Chang
 */
import { ShowroomSection } from '../domain/model/showroom-section.entity.js';

export class ShowroomSectionAssembler {
    static toEntityFromResource(resource) {
        return new ShowroomSection(resource);
    }
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) return [];
        return response.data.map(r => this.toEntityFromResource(r));
    }
}

