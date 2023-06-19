import BasicPhyImg from "../assets/books/basic-physics.png";
import BioOrgChemImg from "../assets/books/bio-org-chem.png";
import CrystalChemImg from "../assets/books/crystal-chem.png";
import BiologyImg from "../assets/books/biology.png";
export interface RecommendationData {
  title: string;
  src: string;
  author: string;
  id: number;
}
export const recommendationCardsData: RecommendationData[] = [
  {
    title: "Basic Physics",
    src: BasicPhyImg,
    author: "Carlos Gonzalez",
    id: 0,
  },
  {
    title: "Bio organic chemistry",
    src: BioOrgChemImg,
    author: "Carlos Gonzalez",
    id: 0,
  },
  {
    title: "Crystal chemistry",
    src: CrystalChemImg,
    author: "Carlos Gonzalez",
    id: 0,
  },
  {
    title: "Biology",
    src: BiologyImg,
    author: "Carlos Gonzalez",
    id: 0,
  },
];
