export type ProjectDataProps = {
    normalizedGoal?: string | null;
    data: {
      acessLlink: string;
      gitLlink: string;
      id: string;
      image: string;
      posters: string[];
      name: string;
      subtitle: string;
      techs: string[];
      original: boolean;
      goal: string;
      collaborators: string;
    };
  }