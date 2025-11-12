-- Create a storage bucket for CRSP data files
INSERT INTO storage.buckets (id, name, public)
VALUES ('crsp-files', 'crsp-files', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public read access to crsp-files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload crsp-files" ON storage.objects;
DROP POLICY IF EXISTS "Service role can manage crsp-files" ON storage.objects;

-- Create RLS policies for the bucket to allow public read access
CREATE POLICY "Public read access to crsp-files"
ON storage.objects FOR SELECT
USING (bucket_id = 'crsp-files');

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload crsp-files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'crsp-files');

-- Allow service role full access
CREATE POLICY "Service role can manage crsp-files"
ON storage.objects FOR ALL
USING (bucket_id = 'crsp-files');