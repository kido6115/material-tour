import { SharedMaterialModule } from './shared-material.module';

describe('SharedMaterialModule', () => {
  let sharedMaterialModule: SharedMaterialModule;

  beforeEach(() => {
    sharedMaterialModule = new SharedMaterialModule();
  });

  it('should create an instance', () => {
    expect(sharedMaterialModule).toBeTruthy();
  });
});
