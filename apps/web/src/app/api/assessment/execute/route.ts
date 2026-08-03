import { NextResponse } from 'next/server';
import { ConversationOrchestrator, ScoredQuestion } from './orchestrator';
// import { kernel } from '@welliqo/assessment-engine';
import { MasterEngineConfig } from '@welliqo/intelligence';

export async function POST(request: Request) {
  try {
    const { answers, knownFacts, answeredQuestionIds, currentLayer } = await request.json();

    // 1. Calculate the final Report based on current answers
    // const report = kernel.executeAssessment(answers, MasterEngineConfig);
    const mockReport = { isComplete: false, recommendations: [] }; // Mocking for now

    // 2. Initialize the Question Selection Engine (mocked output for now)
    // const selector = new QuestionSelectionEngine(MasterEngineConfig);
    // const rankedQuestions = selector.rankAllQuestions({ answeredQuestionIds, knownFacts });
    const mockRankedQuestions: ScoredQuestion[] = [
      {
        question: { id: 'q:energy:sleep_duration', label: 'How many hours do you usually sleep at night?', tags: ['energy'], humanMoment: 'Great. Now I\'d like to understand your sleep. Many people don\'t realise how much sleep affects energy and weight.' },
        informationGain: 45
      }
    ];

    // 3. Orchestrate the conversation
    const orchestrator = new ConversationOrchestrator(currentLayer || null, answeredQuestionIds || []);
    const { nextQuestion, isNewLayer, newLayerName } = orchestrator.selectNextQuestion(mockRankedQuestions, MasterEngineConfig.questions);
    const confidences = [{ domain: 'energy', confidence: 45 }];

    // 4. Stop Early Rule
    const allConfident = false;

    if (allConfident || !nextQuestion) {
      return NextResponse.json({
        action: 'FINISH',
        report: mockReport,
        confidences
      });
    }

    return NextResponse.json({
      action: 'ASK',
      nextQuestion,
      isNewLayer,
      newLayerName,
      currentReportPreview: mockReport,
      confidences
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to process assessment' }, { status: 500 });
  }
}
