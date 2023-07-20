// question.ts
export interface Question {
    title: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    qtpye: string;
    diff: string;
    year: string;
    source: string;
    subjectId: string;
    paperTpye: string;
    qid: string;
    answer1: string;
    answer2: string;
    parse: string;
    isSub: string;
    isNormal: string;
    isunique: string;
    id: string;
    knowledgeMore: Knowledge[];
}

export interface Knowledge {
    id: string;
    knowledgeName: string;
    knowledgeId: string;
}