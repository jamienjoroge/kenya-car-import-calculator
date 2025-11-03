-- Add version tracking columns to crsp_data table
ALTER TABLE crsp_data 
ADD COLUMN IF NOT EXISTS crsp_version text DEFAULT '2018',
ADD COLUMN IF NOT EXISTS effective_date date DEFAULT '2018-07-01';

-- Create index for fast filtering by version
CREATE INDEX IF NOT EXISTS idx_crsp_version ON crsp_data(crsp_version);

-- Create index for combined queries (version + make + model)
CREATE INDEX IF NOT EXISTS idx_crsp_version_make_model ON crsp_data(crsp_version, make_name, model_name);

COMMENT ON COLUMN crsp_data.crsp_version IS 'CRSP data version (e.g., 2018, 2025) to track different KRA valuation schedules';
COMMENT ON COLUMN crsp_data.effective_date IS 'Date when this CRSP version became effective';